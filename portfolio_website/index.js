// ------------------------------------------------ Constants -------------------------------------------------------
const body = document.body;
const headerThemeToggleBtn = document.getElementById("header-theme-toggle-button");
const sidebarThemeToggleBtn = document.getElementById('sidebar-theme-toggle-button')

const sidebarToggle = document.getElementById('sidebar-menu-container-toggle-button')
const sidebarMenu = document.getElementById('sidebar-menu-container');
const responsiveBreakpoint = 900;

// ----------------------------------------------- Functions ---------------------------------------------------------

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
function toggleDarkMode() 
{
  body.classList.toggle("dark-mode");
  updateDisplay();
}

// Hides or shows element based on the toggled mode, and updates the color scheme
function updateDisplay() 
{
    const lightModeElements = document.getElementsByClassName("light-theme-element");
    const darkModeElements = document.getElementsByClassName("dark-theme-element");

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

    // Listens for size changes to the windows 
    window.addEventListener('resize', checkWindowSize);
    checkWindowSize(); // Initial check of browser size
}

// ------------------------------------------- Adding listeners ---------------------------------------------------

// Listen for changes in the browser's preferred color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkPreferredColorScheme);


// Event listener for the light/dark theme toggle buttons
headerThemeToggleBtn.addEventListener('click', toggleDarkMode);
sidebarThemeToggleBtn.addEventListener('click', toggleDarkMode);


// Opens or closes the sidebar menu when menu toggle button is clicked
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

// ----------------------------------------Initial Function Calls -----------------------------------------------------

// Calls function on load to listen for size changes to the browser
closeMenuAtMaxSize(sidebarMenu, responsiveBreakpoint);


// Initial check of the browser's preferred color scheme
checkPreferredColorScheme();