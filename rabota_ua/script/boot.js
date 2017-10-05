 var bg = document.getElementById('dad');
        document.getElementById('not').addEventListener("mouseover", function() {
            bg.style.background = "#49cbcd";
            this.addEventListener("mouseout", function() {
                bg.style.background = "";
            });
        });