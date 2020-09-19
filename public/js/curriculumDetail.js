$(document).ready(function(){
    const db = firebase.firestore();

    const contentDiv = document.getElementById('curriculum-detail-content');
    const row = document.createElement("div");
    row.classList.add('row');

    // parse query strings
    const params = new URLSearchParams(window.location.search);
    if(params.has('subject') && params.has('content') && params.has('uid')){
        const subjectName = params.get('subject');
        const content = params.get('content');
        const uid = params.get('uid');

        const contentRef = db.collection('curriculum').doc(subjectName).collection(content).doc(uid);
        contentRef.get().then(contentSnapshot => {
            if(contentSnapshot && contentSnapshot.exists){                

                const { title } = contentSnapshot.data();

                const p = document.createElement('p');
                p.innerHTML = title;

                // 
                const p = document.createElement('div');

                row.appendChild(p);
            } else {
                const p = document.createElement('p');
                p.innerHTML = "unable to find content in firestore";
                row.appendChild(p);
            }
        });
    } else {
        const p = document.createElement('p');
        p.innerHTML = "unable to find content";
        row.appendChild(p);
    }
    contentDiv.appendChild(row);
});