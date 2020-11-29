// $(document).ready(function(){
//     const db = firebase.firestore();
//     const curriculumRef = db.collection('curriculum');
//     curriculumRef.get().then(curriculumSnapshot => {
//         const curriculumDocs = curriculumSnapshot.docs;
//         if(curriculumDocs){
//             const circulumSubjects = document.getElementById('circulum-subjects');
//             curriculumDocs.map(subjectDoc => {
//                 const subjectName = subjectDoc.id;
//                 const subjectId = `circulum-subjects-${subjectName}`;
//                 const { subcollections } = subjectDoc.data();
//                 if(subcollections){
//                     const row = document.createElement('div');
//                     row.classList.add('row');

//                     const headerRow = document.createElement('div');
//                     headerRow.classList.add('sixteen');
//                     headerRow.classList.add('wide');
//                     headerRow.classList.add('column');
//                     headerRow.classList.add('subject-name');
//                     headerRow.setAttribute('id', subjectId);
//                     const h2 = document.createElement('h2');
//                     h2.classList.add('ui');
//                     h2.classList.add('header');
//                     h2.innerHTML = subjectName;

//                     headerRow.appendChild(h2);
//                     row.appendChild(headerRow);

//                     subcollections.map(subcollection => {
//                         const { subcollectionName, title } = subcollection;
//                         if(subcollectionName && title){
//                             const listRow = document.createElement('div');
//                             listRow.classList.add('sixteen');
//                             listRow.classList.add('wide');
//                             listRow.classList.add('column');    
//                             const subHeaderRow = document.createElement('div');
//                             subHeaderRow.classList.add('sixteen');
//                             subHeaderRow.classList.add('wide');
//                             subHeaderRow.classList.add('column');
//                             subHeaderRow.classList.add('subheader-name');
//                             const h3 = document.createElement('h3');
//                             h3.classList.add('ui');
//                             h3.classList.add('header');
//                             h3.classList.add('curriculum-mbs');
//                             h3.innerHTML = title;
//                             const list = document.createElement('div');
//                             list.classList.add('ui');
//                             list.classList.add('relaxed');
//                             list.classList.add('divided');
//                             list.classList.add('list');

//                             subHeaderRow.appendChild(h3);
//                             listRow.appendChild(list);

//                             row.appendChild(subHeaderRow);
//                             row.appendChild(listRow);

//                             circulumSubjects.appendChild(row);
                            
//                             const videosRef = db.collection('curriculum').doc(subjectName).collection(subcollectionName);
//                             videosRef.get().then(videosSnapshot => {
//                                 const videosDocs = videosSnapshot.docs;
//                                 if(videosDocs){
//                                     videosDocs.map(videoDoc => {
//                                         const uid = videoDoc.id;
//                                         const { title } = videoDoc.data();
//                                         if(title){
//                                             const item = document.createElement('div');
//                                             item.classList.add('item');

//                                             const content = document.createElement('div');
//                                             content.classList.add('content');

//                                             const header = document.createElement('a');
//                                             header.innerHTML = title;
//                                             header.classList.add('link');
//                                             header.addEventListener('click', () => {
//                                                 window.location = `curriculum-content.html?subject=${subjectName}&content=${subcollectionName}&uid=${uid}`;
//                                             });

//                                             content.appendChild(header);
//                                             item.appendChild(content);
//                                             list.appendChild(item);
//                                         }
//                                     })
//                                 }
                            
//                             }).catch(err => {
//                                 console.log(err);
//                             })
//                         }
//                     });
//                 }
//             })
//         }
//     }).catch(err => {
//         console.log(err);
//     });
// });
$(document).ready(function(){

    const params = new URLSearchParams(window.location.search);

    if(params.has('subject')){
        const subjectName = params.get('subject');

        const db = firebase.firestore();

        const curriculumRef = db.collection('curriculum').doc(subjectName);
        curriculumRef.get().then(curriculumSnapshot => {
            if(curriculumSnapshot && curriculumSnapshot.exists){
                const circulumSubject = document.getElementById('circulum-subject');
                const subjectName = curriculumSnapshot.id;
                const subjectId = 'circulum-subject-title';
                const { subcollections } = curriculumSnapshot.data();
                if(subcollections){
                    const row = document.createElement('div');
                    row.classList.add('row');

                    const h2 = document.createElement('h2');
                    h2.classList.add('subject-name');
                    h2.setAttribute('id', subjectId);
                    h2.innerHTML = subjectName;

                    circulumSubject.appendChild(h2);

                    subcollections.map(subcollection => {
                        const { subcollectionName, title } = subcollection;
                        if(subcollectionName && title){
                            const listRow = document.createElement('div');
                            listRow.classList.add('sixteen');
                            listRow.classList.add('wide');
                            listRow.classList.add('column');    
                            const subHeaderRow = document.createElement('div');
                            subHeaderRow.classList.add('sixteen');
                            subHeaderRow.classList.add('wide');
                            subHeaderRow.classList.add('column');
                            subHeaderRow.classList.add('subheader-name');
                            const h3 = document.createElement('h3');
                            h3.classList.add('curriculum-mbs');
                            h3.innerHTML = title;
                            const list = document.createElement('div');
                            list.classList.add('ui');
                            list.classList.add('relaxed');
                            list.classList.add('divided');
                            list.classList.add('list');

                            subHeaderRow.appendChild(h3);
                            listRow.appendChild(list);

                            row.appendChild(subHeaderRow);
                            row.appendChild(listRow);

                            circulumSubject.appendChild(row);
                            
                            const videosRef = db.collection('curriculum').doc(subjectName).collection(subcollectionName);
                            videosRef.get().then(videosSnapshot => {
                                const videosDocs = videosSnapshot.docs;
                                if(videosDocs){
                                    videosDocs.map(videoDoc => {
                                        const uid = videoDoc.id;
                                        const { title, studyGuideUrl } = videoDoc.data();
                                        if(title){
                                            const item = document.createElement('div');
                                            item.classList.add('item');

                                            const content = document.createElement('div');
                                            content.classList.add('content');

                                            const header = document.createElement('a');
                                            header.innerHTML = title;
                                            header.classList.add('link');
                                            header.addEventListener('click', () => {
                                                window.location = `curriculum-content.html?subject=${subjectName}&content=${subcollectionName}&uid=${uid}`;
                                            });

                                            const modalId = title.replace(/\s+/g, '');
                                            const studyGuideModal = document.createElement('div');
                                            studyGuideModal.classList.add('ui');
                                            studyGuideModal.classList.add('modal');
                                            studyGuideModal.setAttribute("id", modalId);

                                            const studyGuideModalImage = document.createElement('img');
                                            studyGuideModalImage.setAttribute("src", studyGuideUrl);

                                            studyGuideModal.appendChild(studyGuideModalImage);

                                            const rightContent = document.createElement('div');
                                            rightContent.classList.add('right');
                                            rightContent.classList.add('floated');
                                            rightContent.classList.add('content');

                                            const studyGuideButton = document.createElement('button');
                                            studyGuideButton.innerHTML = "Study Guide";
                                            studyGuideButton.classList.add('ui');
                                            studyGuideButton.classList.add('button');
                                            studyGuideButton.addEventListener('click', () => {
                                                if(studyGuideUrl){
                                                    $(`#${modalId}.ui.modal`).modal('show');
                                                }
                                            });

                                            content.appendChild(header);
                                            rightContent.appendChild(studyGuideButton);
                                            
                                            item.appendChild(studyGuideModal);
                                            item.appendChild(rightContent);
                                            item.appendChild(content);

                                            list.appendChild(item);
                                        }
                                    })
                                }
                            }).catch(err => {
                                console.log(err);
                            })
                        }
                    });
                }
            }
        }).catch(err => {
            console.log(err);
        });
    } else {
        window.location = 'curriculum.html';
    }
});