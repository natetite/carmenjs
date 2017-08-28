function checkState(state) {
  state = document.getElementById('launcher');
  return(state);
}

function newCarmen() {
  if (checkState() != undefined) {
      document.body.removeChild(checkState());
  }
}

function closeCarmen() {
  document.body.removeChild(checkState());
}

function Carmen(modal, cont, input) {
  // Replace the Carmen Search box if one is already up
  newCarmen()
    // Create some elements
    modal = document.createElement('div');
    cont  = document.createElement('div');
    input = document.createElement('input');
      // Attach some specifics
      modal.id = "launcher";
      modal.setAttribute('style', styling.launcher);
      input.setAttribute('style', styling.input);
      input.setAttribute("onblur", "closeCarmen()");
      input.type = "search";
      input.placeholder = "Search Your Stuff...";
        // Make an entrance!
        setTimeout(function(){
          cont.setAttribute('style', styling.cont);
        }, 10);
          // Now add the elements to the DOM and focus the input
          document.body.appendChild(modal);
          modal.appendChild(cont, modal);
          cont.appendChild(input, cont);
          input.focus();
}

// Some visuals
const styling = {
  launcher : 'position: fixed; z-index: 99; top: 8em; left: 6%; right: 6%; opacity: 0.9;',
  input : 'width: 100%; outline: none; border: 0; background: inherit; color: #444; font-size: 1.6rem;',
  cont  : 'padding: 2rem; background: #E5E5E5; border: 1px solid #bbb; transition: 0.1s; box-shadow: 0px 18px 22px #aaa; border-radius: 7px;',
}
