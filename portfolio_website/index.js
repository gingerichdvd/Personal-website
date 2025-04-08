const toggleMode = document.getElementById("toggle-mode");
const toggleLanguage = document.getElementById("language-toggle");
const body = document.body;


toggleMode.addEventListener('click', () =>
{
    body.classList.toggle("dark-mode");

    var lightModeElements = document.getElementsByClassName("light-theme");
    var darkModeElements = document.getElementsByClassName("dark-theme");

    for (let i = 0; i < darkModeElements.length; i++)
    {
        let darkModeDisplay = window.getComputedStyle(darkModeElements[i]).display;
        if (darkModeDisplay === "none")
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
});

toggleLanguage.addEventListener('click', () =>
{
    var engElements = document.getElementsByClassName("english");
    var japElements = document.getElementsByClassName("japanese");

    for (let i = 0; i < japElements.length; i++)
    {
        let japDisplay = window.getComputedStyle(japElements[i]).display;
        if (japDisplay === "none")
        {
            japElements[i].style.display = "block";
            engElements[i].style.display = "none";
        }
        else
        {
            japElements[i].style.display = "none";
            engElements[i].style.display = "block";
        }
    }
});
