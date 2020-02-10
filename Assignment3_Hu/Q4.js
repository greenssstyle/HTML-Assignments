var arrNumbers = new Array(1000);
                        var Limit = 1000;
                        for (var i = 2; i < Limit; i++) {
                                arrNumbers[i] = 1;
                        }

                        function findPrimes() {
                                for (var i = 2; i <= Math.floor(Math.sqrt(Limit)); i++) {
                                        if (arrNumbers[i] == 1) {
                                                for (var p = (i * 2); p < Limit; p += i) {
                                                        arrNumbers[p] = 0;
                                                }
                                        }
                                }
                                var strHTML = "<p>";
                                var counter = 1;
                                for (var i = 2; i < Limit; i++) {
                                        if (arrNumbers[i] == 1){
                                            strHTML += "Prime number "+counter+" is "+i+"<br/>";
                                            counter++;
                                        }
                                }
                                document.getElementById("result").innerHTML = strHTML+"</p>";
                        }