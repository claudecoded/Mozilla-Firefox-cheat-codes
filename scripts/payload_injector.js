/**
 * ⚡ ATTACK SURFACE MAPPING ENGINE
 * Run this directly inside the Firefox Web Console (F12)
 */
(function() {
    console.clear();
    console.log("%c[+] Firefox Cheat Codes: Mapping Target...", "color: #00ff00; font-weight: bold;");

    // 1. Extract All Forms & Inputs
    const forms = document.querySelectorAll('form');
    console.group(`📋 Forms Discovered (${forms.length})`);
    forms.forEach((form, idx) => {
        console.log(`Form #${idx} - Action: ${form.action} | Method: ${form.method}`);
        const inputs = form.querySelectorAll('input');
        inputs.forEach(i => console.log(`  -> Input: [${i.type}] Name: ${i.name} | Value: ${i.value}`));
    });
    console.groupEnd();

    // 2. Extract Comments hidden inside the DOM (Often leaks endpoints/credentials)
    const iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_COMMENT);
    let currentNode;
    console.group("🕵️‍♂️ Leaked HTML Comments");
    while (currentNode = iterator.nextNode()) {
        console.log(`%c${currentNode.nodeValue}`, "color: #ff9900;");
    }
    console.groupEnd();

    // 3. Find Broken/Hidden Third-Party Scripts
    console.group("🌐 Loaded External Scripts");
    document.querySelectorAll('script[src]').forEach(script => {
        console.log(script.src);
    });
    console.groupEnd();
})();
