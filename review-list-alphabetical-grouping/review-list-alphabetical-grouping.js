$(document).ready(function($) {
    function initTabs() {
        let tabsButtons = document.querySelectorAll('.btn-primary');
        let tabContent = document.querySelectorAll('.card-content-tab');
        let tabName;
    
        tabsButtons.forEach(btn => btn.addEventListener('click', selectBtn));
        
        function selectBtn() {
            tabsButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            tabName = this.getAttribute('data-tab-name');
            selectContent(tabName);
        }

        function selectContent(tabName) {
            tabContent.forEach(item => {
                if(item.classList.contains(tabName)) {
                    item.classList.add('active');
                    setTimeout(() => item.style.opacity = '1', 300);
                }
                else {
                    item.classList.remove('active');
                    setTimeout(() => item.style.opacity = '0', 300);
                }
            })
        }
    }
    initTabs();
});
