$(document).ready(function(){
    const db = firebase.firestore();
    const curriculumRef = db.collection('curriculum');
    curriculumRef.get().then(curriculumSnapshot => {
        const curriculumDocs = curriculumSnapshot.docs;
        if(curriculumDocs){
            curriculumDocs.map(subjectDoc => {
                const subjectName = subjectDoc.id;
                const videosRef = db.collection('curriculum').doc(subjectName).collection('videos');
                videosRef.get().then(videosSnapshot => {
                    const videosDocs = videosSnapshot.docs;
                    if(videosDocs){
                        videosDocs.map(videoDoc => {
                            console.log(`${subjectName} ${JSON.stringify(videoDoc.data())}`)
                        })
                    }
                }).catch(err => {
                    console.log(err);
                })

            })
        }
    }).catch(err => {
        console.log(err);
    });
});