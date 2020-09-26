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
                const { subcollections } = subjectDoc.data(); 
                if(subcollections){
                    subcollections.map(subcollection => {
                        const { subcollectionName, title } = subcollection;
                        
                        console.log(subcollectionName, title);

                        const row = document.createElement('div');
                        row.classList.add('row');

                        const listRow = document.createElement('div');
                        listRow.classList.add('sixteen');
                        listRow.classList.add('wide');
                        listRow.classList.add('column');
                        const headerRow = document.createElement('div');
                        headerRow.classList.add('sixteen');
                        headerRow.classList.add('wide');
                        headerRow.classList.add('column');
                        headerRow.classList.add('subject-name');
                        const subHeaderRow = document.createElement('div');
                        subHeaderRow.classList.add('sixteen');
                        subHeaderRow.classList.add('wide');
                        subHeaderRow.classList.add('column');
                        subHeaderRow.classList.add('subheader-name');
                        const h2 = document.createElement('h2');
                        h2.classList.add('ui');
                        h2.classList.add('header');
                        h2.innerHTML = subjectName;
                        const h3 = document.createElement('h3');
                        h3.classList.add('ui');
                        h3.classList.add('header');
                        h3.innerHTML = title;
                        const list = document.createElement('div');
                        list.classList.add('ui');
                        list.classList.add('relaxed');
                        list.classList.add('divided');
                        list.classList.add('list');
                        list.setAttribute('id', subjectId);

                        headerRow.appendChild(h2);
                        subHeaderRow.appendChild(h3);
                        listRow.appendChild(list);

                        row.appendChild(headerRow);
                        row.appendChild(subHeaderRow);
                        row.appendChild(listRow);

                        circulumSubjects.appendChild(row);

                        const videosRef = db.collection('curriculum').doc(subjectName).collection(subcollectionName);
                        videosRef.get().then(videosSnapshot => {
                            const videosDocs = videosSnapshot.docs;
                            if(videosDocs){
                                videosDocs.map(videoDoc => {
                                    const uid = videoDoc.id;
                                    const { title } = videoDoc.data();
                                    if(title){
                                        const item = document.createElement('div');
                                        item.classList.add('item');

                                        const content = document.createElement('div');
                                        content.classList.add('content');

                                        const header = document.createElement('p');
                                        header.innerHTML = title;
                                        header.addEventListener('click', () => {
                                            window.location = `curriculum-detail.html?subject=${subjectName}&content=videos&uid=${uid}`;
                                        });

                                        content.appendChild(header);
                                        item.appendChild(content);
                                        list.appendChild(item);
                                    }
                                })
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    });
                }
            })
        }
    }).catch(err => {
        console.log(err);
    });
});