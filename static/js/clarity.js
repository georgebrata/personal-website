(function(windowRef, documentRef, clarityKey, scriptTag, projectId) {
  windowRef[clarityKey] = windowRef[clarityKey] || function() {
    (windowRef[clarityKey].q = windowRef[clarityKey].q || []).push(arguments);
  };

  const clarityScript = documentRef.createElement(scriptTag);
  clarityScript.async = 1;
  clarityScript.src = `https://www.clarity.ms/tag/${projectId}`;

  const firstScript = documentRef.getElementsByTagName(scriptTag)[0];
  firstScript.parentNode.insertBefore(clarityScript, firstScript);
})(window, document, "clarity", "script", "w9hepbyfua");
