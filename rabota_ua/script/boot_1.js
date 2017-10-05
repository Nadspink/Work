 var lg = document.getElementById('dad_2');
        document.getElementById('not_2').addEventListener("mouseover", function() {
            lg.style.background = "#49cbcd";
            this.addEventListener("mouseout", function() {
                lg.style.background = "";
            });
        });