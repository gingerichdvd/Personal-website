const body = document.body;
const toggleMode = document.getElementById("toggle-mode");
const sidebarToggle = document.getElementById('menu-toggle')
const sidebarMenu = document.getElementById('sidebar-menu');
const responsiveBreakpoint = 900;

// Function to check and apply the browser's preferred color scheme
function checkPreferredColorScheme() 
{
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) 
  {
    body.classList.add("dark-mode");
  } 
  else 
  {
    body.classList.remove("dark-mode");
  }
  updateDisplay();
}

// Toggles the classlist
function toggleModes() 
{
  body.classList.toggle("dark-mode");
  updateDisplay();
}

// Hides or shows element based on the toggled mode, and updates the color scheme
function updateDisplay() 
{
    const lightModeElements = document.getElementsByClassName("light-theme");
    const darkModeElements = document.getElementsByClassName("dark-theme");

    for (let i = 0; i < darkModeElements.length; i++)
    {
        if (body.classList.contains("dark-mode")) 
        {
            darkModeElements[i].style.display = "block";
            lightModeElements[i].style.display = "none";
        }
        else
        {
            darkModeElements[i].style.display = "none";
            lightModeElements[i].style.display = "block";
        }
    }
}

// Function to close menu at max size
function closeMenuAtMaxSize(sidebar, breakpoint) 
{
    function checkWindowSize() 
    {
        if (window.innerWidth >= breakpoint) 
        {
            sidebar.style.display = "none";
        }
    }

    window.addEventListener('resize', checkWindowSize);
    checkWindowSize(); // Initial check when script runs
}

// Listen for changes in the browser's preferred color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkPreferredColorScheme);

// Event listener for the toggle button
toggleMode.addEventListener('click', toggleModes);

// Event listener for the menu toggle button
sidebarToggle.addEventListener('click', function() 
{
    if (sidebarMenu.style.display === 'flex') 
    {
        sidebarMenu.style.display = 'none';
    } 
    else 
    {
        sidebarMenu.style.display = 'flex';
    }
});

closeMenuAtMaxSize(sidebarMenu, responsiveBreakpoint);

// Initial check of the browser's preferred color scheme
checkPreferredColorScheme();