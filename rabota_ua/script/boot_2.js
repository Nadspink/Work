 var dg = document.getElementById('dad_1');
        document.getElementById('not_1').addEventListener("mouseover", function() {
            dg.style.background = "#49cbcd";
            this.addEventListener("mouseout", function() {
                dg.style.background = "";
            });
        });