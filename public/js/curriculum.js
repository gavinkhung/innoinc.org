$(document).ready(function(){
    const db = firebase.firestore();
    const curriculumRef = db.collection('curriculum');
    curriculumRef.get().then(curriculumSnapshot => {
        const curriculumDocs = curriculumSnapshot.docs;
        if(curriculumDocs){
            const circulumSubjects = document.getElementById('circulum-subjects');
            curriculumDocs.map(subjectDoc => {
                const subjectName = subjectDoc.id;
                const subjectId = `circulum-subjects-${subjectName}`;
                console.log(subjectId);
            })
        }
    }).catch(err => {
        console.log(err);
    });
});