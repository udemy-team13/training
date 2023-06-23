const weather = document.getElementById("weather");
        const API_KEY = "";

        function getWaether(lat, lon){
            console.log(lat, lin);

            fetch(
                ''
            )

            .then(funtion(respose){
                return response.json();
            })
            .then(function(json){
                console.log(json);
                const temp = json.main.temp;
                const humidity = json.main.himidity;
            })
        }


        //. 최초 API 성공 시 반응
        function handleGeoSuccess(){
            console.log(pos);
            console.log(pos.coords.latitude)
        }

        //.
        function handleGeoError(){
            console.log('error')
        }

        function init(){
            navigator.geolocation.getCurrentPosition(handleGeoSuccess)
        }