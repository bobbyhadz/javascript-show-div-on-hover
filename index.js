console.log('bobbyhadz.com');

const el = document.getElementById('container');

const hiddenDiv = document.getElementById('hidden-div');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.display = 'block';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv.style.display = 'none';

  // 👇️ if you used visibility property to hide the div
  // hiddenDiv.style.visibility = 'hidden';
});
