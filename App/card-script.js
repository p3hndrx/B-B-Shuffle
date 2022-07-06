function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        var proc = [
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_32.png' data-lightbox='procedure1'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_32.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_33.png' data-lightbox='procedure2'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_33.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_34.png' data-lightbox='procedure3'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_34.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_35.png' data-lightbox='procedure4'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_35.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_36.png' data-lightbox='procedure5'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_36.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_37.png' data-lightbox='procedure6'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_37.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_38.png' data-lightbox='procedure7'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_38.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_39.png' data-lightbox='procedure8'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_39.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_40.png' data-lightbox='procedure9'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_40.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_41.png' data-lightbox='procedure10'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_41.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_42.png' data-lightbox='procedure11'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_42.png'></a></div>",
            "<div class='proc'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_43.png' data-lightbox='procedure12'><img class='procimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_43.png'></a></div>"
        ]

        var init = [
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_1.png' data-lightbox='initial1'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_1.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_2.png' data-lightbox='initial2'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_2.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_3.png' data-lightbox='initial3'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_3.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_4.png' data-lightbox='initial4'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_4.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_5.png' data-lightbox='initial5'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_5.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_6.png' data-lightbox='initial6'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_6.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_7.png' data-lightbox='initial7'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_7.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_8.png' data-lightbox='initial8'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_8.png'></a>"
        ]

        var pivot = [
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_9.png' data-lightbox='pivot1'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_9.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_10.png' data-lightbox='pivot2'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_10.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_11.png' data-lightbox='pivot3'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_11.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_12.png' data-lightbox='pivot4'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_12.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_13.png' data-lightbox='pivot5'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_13.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_14.png' data-lightbox='pivot6'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_14.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_15.png' data-lightbox='pivot7'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_15.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_16.png' data-lightbox='pivot8'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_16.png'></a>"
        ]

        var c2 = [
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_26.png' data-lightbox='c21'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_26.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_27.png' data-lightbox='c22'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_27.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_28.png' data-lightbox='c23'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_28.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_29.png' data-lightbox='c24'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_29.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_30.png' data-lightbox='c25'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_30.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_31.png' data-lightbox='c26'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_31.png'></a>",
        ]

        var persist = [
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_17.png' data-lightbox='persist1'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_17.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_18.png' data-lightbox='persist2'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_18.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_19.png' data-lightbox='persist3'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_19.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_20.png' data-lightbox='persist4'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_20.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_21.png' data-lightbox='persist5'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_21.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_22.png' data-lightbox='persist6'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_22.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_23.png' data-lightbox='persist7'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_23.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_24.png' data-lightbox='persist8'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_24.png'></a>",
            "<a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_25.png' data-lightbox='persist9'><img class='scenimg' src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_25.png'></a>"
        ]

        var ins = [
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_44.png' data-lightbox='inject1'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_44.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_45.png' data-lightbox='inject2'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_45.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_46.png' data-lightbox='inject3'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_46.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_47.png' data-lightbox='inject4'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_47.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_48.png' data-lightbox='inject5'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_48.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_49.png' data-lightbox='inject6'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_49.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_50.png' data-lightbox='inject7'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_50.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_51.png' data-lightbox='inject8'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_51.png'></a></div>",
            "<div class='inject'><a href='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_52.png' data-lightbox='inject9'><img src='img/ICS-OTv1/BNB_CARDS_ICS_DRAGOS_52.png'></a></div>"
        ]

        shuffle(proc);
        document.getElementById("output").innerHTML = proc.slice(0, 4).join("");
        document.getElementById("remainder").innerHTML = proc.slice(4, 11).join("");

        shuffle(init);
        var init_id = init.slice(0,1);
        document.getElementById("a").innerHTML = init.slice(0,1);
        document.getElementById("dm_solution").innerHTML += init.slice(0,1);

        shuffle(pivot);
        var pivot_id = pivot.slice(0,1);
        document.getElementById("b").innerHTML = pivot.slice(0,1);
        document.getElementById("dm_solution").innerHTML += pivot.slice(0,1);

        shuffle(c2);
        var c2_id = c2.slice(0,1);
        document.getElementById("c").innerHTML = c2.slice(0,1);
        document.getElementById("dm_solution").innerHTML += c2.slice(0,1);

        shuffle(persist);
        var persist_id = persist.slice(0,1);
        document.getElementById("d").innerHTML = persist.slice(0,1);
        document.getElementById("dm_solution").innerHTML += persist.slice(0,1);

        //INJECTS
        shuffle(ins);

          //set init
        document.getElementById("injectbox").innerHTML = ins.slice(0,1);

        s = 1
        t = 2
        function update_ins() {
              document.getElementById("e").innerHTML = ins.slice(s,t);
            s++
            t++
            if (t==ins.length+2)
              {s = 1; t = 2;}
        }

      function rem_ins() {
              document.getElementById("e").innerHTML = "<img style='width:200px;'' src='img/CARD_BACK_2.0_DRAGOS_GREY.png'>";
        }