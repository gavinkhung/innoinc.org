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

                const row = document.createElement("div");
                row.classList.add('row');

                const h3 = document.createElement("h3");
                h3.innerHTML = subjectName;
                const list = document.createElement("div");
                list.classList.add('ui');
                list.classList.add('list');
                list.setAttribute('id', subjectId);

                row.appendChild(h3);
                row.appendChild(list);

                circulumSubjects.appendChild(row);

                const videosRef = db.collection('curriculum').doc(subjectName).collection('videos');
                videosRef.get().then(videosSnapshot => {
                    const videosDocs = videosSnapshot.docs;
                    if(videosDocs){
                        videosDocs.map(videoDoc => {
                            console.log(`${subjectName} ${JSON.stringify(videoDoc.data())}`);
                            const item = document.createElement("div");
                            item.classList.add('item');

                            const content = document.createElement("div");
                            content.classList.add('content');

                            const header = document.createElement('p');
                            header.classList.add('header');
                            header.innerHTML = JSON.stringify(videoDoc.data());

                            content.appendChild(header);
                            list.appendChild(content);
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