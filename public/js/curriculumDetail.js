$(document).ready(() => {
    const db = firebase.firestore();

    const contentDiv = document.getElementById('curriculum-detail-content');
    const headerRow = document.createElement("div");
    headerRow.classList.add('row');

    const playerRow = document.createElement("div");
    playerRow.classList.add('row');

    // parse query strings
    const params = new URLSearchParams(window.location.search);
    if(params.has('subject') && params.has('content') && params.has('uid')){
        const subjectName = params.get('subject');
        const content = params.get('content');
        const uid = params.get('uid');

        const contentRef = db.collection('curriculum').doc(subjectName).collection(content).doc(uid);
        contentRef.get().then(contentSnapshot => {
            if(contentSnapshot && contentSnapshot.exists){                

                const { title, embedID } = contentSnapshot.data();

                const p = document.createElement('p');
                p.classList.add('center');
                p.innerHTML = title;

                const playerDiv = document.createElement('div');
                playerDiv.setAttribute("id", "player");
                playerDiv.classList.add('plyr__video-embed');

                const iframe = document.createElement('iframe');
                iframe.setAttribute("src", `https://www.youtube.com/embed/${embedID}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`);
                iframe.setAttribute("allowfullscreen", "true");
                iframe.setAttribute("allowtransparency", "true");

                playerDiv.appendChild(iframe);

                headerRow.appendChild(p);
                playerRow.appendChild(playerDiv);

                contentDiv.appendChild(headerRow);
                contentDiv.appendChild(playerRow);
            } else {
                window.location = 'curriculum.html';
            }
        });
    } else {
        window.location = 'curriculum.html';
    }
});