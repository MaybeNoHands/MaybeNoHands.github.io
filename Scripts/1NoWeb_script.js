	    // Обновляем число при загрузке страницы
   // Массив с путями к картинкам
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }
        
        var cTimeBus, cPassBus, cNumBus, cMarshBus
        var changeCTimeBus = ()=>{
            cTimeBus = document.getElementById("timeBus").value;
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        var images = [
    "control_banana_1.png",
    "contol_cat_2.png",
    "control_cherry_3.png",
    "control_duck_4.png",
    "control_flower_5.png",
    "control_house_6.png",
    "control_plane_7.png",
    "control_rocket_8.png",
    "control_tea_9.png",
    "conrol_tram_10.png",
    // Добавьте пути к другим картинкам
  ];
  // Переменные для хранения текущих индексов картинок
  var leftImageIndex;
  var rightImageIndex;
  var userId;


function getRandomNumber() {
    var numbers = [0, 35, 70];
    var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return randomNumber;
  }
  
  // Функция для обновления числа
  function update1Number() {
    var numberElement = document.getElementById('number');
    var numberElement2 = document.getElementById('number2');
   var numberElement3 = getRandomNumber();
    numberElement.textContent = numberElement3;
    numberElement2.textContent = numberElement3;
  }
  
  window.onload = function() {
       update1Number();
  
    var leftImageElement = document.getElementById('left-image');
    var rightImageElement = document.getElementById('right-image');
      
    // Генерируем случайные начальные значения для индексов
    leftImageIndex = Math.floor(Math.random() * images.length);
    rightImageIndex = leftImageIndex;
    while (rightImageIndex === leftImageIndex) {
      rightImageIndex = Math.floor(Math.random() * images.length);
    }

    // Устанавливаем начальные значения индексов и отображаем картинки
    leftImageElement.src = images[leftImageIndex];
    rightImageElement.src = images[rightImageIndex];

  };

  // Функция для обновления числа при нажатии
  function update2Number() {
    var numberElement = document.getElementById('number');
    var numberElement2 = document.getElementById('number2');
    var currentNumber = parseInt(numberElement.textContent);
    var numbers = [0, 35, 70];

    // Находим следующее число в порядке возрастания
    var nextNumberIndex = numbers.indexOf(currentNumber) + 1;
    if (nextNumberIndex >= numbers.length) {
      nextNumberIndex = 0;
    }

    // Обновляем текст на странице
    numberElement.textContent = numbers[nextNumberIndex];
    numberElement2.textContent = numbers[nextNumberIndex];
  }

  // Функция для обновления левой картинки при нажатии
  function updateLeftImage() {
    var leftImageElement = document.getElementById('left-image');

    // Обновляем индекс левой картинки
    leftImageIndex++;
    if (leftImageIndex >= images.length) {
      leftImageIndex = 0;
    }

    // Обновляем отображаемую картинку
    leftImageElement.src = images[leftImageIndex];
  }

  // Функция для обновления правой картинки при нажатии
  function updateRightImage() {
    var rightImageElement = document.getElementById('right-image');

    // Обновляем индекс правой картинки
    rightImageIndex++;
    if (rightImageIndex >= images.length) {
      rightImageIndex = 0;
    }

    // Обновляем отображаемую картинку
    rightImageElement.src = images[rightImageIndex];
  }


  
  const fakeParam = Date.now(); // создание фиктивного параметра с текущим временем в миллисекундах
        const date = new Date(Date.now());
        const data = {
            "code": 0,
            "data": "Н186СТ159 ; realme 8i ; 220 процентов ; 18:54:20 ; 1 ; 1695236060"
        }
        const variables = data.data.split(' ; ');
        // var cTimeBus, cPassBus, cNumBus, cMarshBus
        
        const url = document.getElementById("numBus").value || variables[0];
        const UstUrl = variables[1];
        const emailurl = 'sash12.polikanov';
       
        document.getElementById("timeBus").addEventListener('input', function(){
            let inputNumber = this.value
            console.log('your variable value is: ' + inputNumber)
            cTimeBus = inputNumber
            document.getElementById('current_date_time_block').innerHTML = inputNumber
        })

        document.getElementById("numBus").addEventListener('input', function(){
            let inputNumber = this.value
            console.log('your variable value is: ' + inputNumber)
            cTimeBus = inputNumber
            document.getElementById('result').innerHTML = inputNumber
            document.getElementById('result2').innerHTML = inputNumber
        })

        document.getElementById("marshBus").addEventListener('input', function(){
            let inputNumber = this.value
            console.log('your variable value is: ' + inputNumber)
            cTimeBus = inputNumber
            document.getElementById('marshrutt').innerHTML = inputNumber
        })

        document.getElementById("passBus").addEventListener('input', function(){
            let inputNumber = this.value
            console.log('your variable value is: ' + inputNumber)
            cTimeBus = inputNumber
            document.getElementById('passen').innerHTML = inputNumber
        })

        document.getElementById("selectMarsh4and59andoth").addEventListener('input', function(){
            let inputNumber = this.value
            console.log('your variable value is: ' + inputNumber)
            cTimeBus = inputNumber
            document.getElementById('marshrutttttt').innerHTML = inputNumber
        })
        
        const timerurl = cTimeBus || `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}:${(date.getSeconds()<10?'0':'') + date.getSeconds()}`
        const passenUrl = document.getElementById("passBus").value || variables[4];
        let unixurl = Date.now();
        
        document.getElementById('marshrutttttt').innerHTML = document.getElementById("selectMarsh4and59andoth").value;
        
        document.getElementById('marshrutt').innerHTML = document.getElementById("marshBus").value;
        
        document.getElementById('emailid').innerHTML = emailurl;
        document.getElementById('result').innerHTML = url;
        document.getElementById('result2').innerHTML = url;
        document.getElementById('ustr').innerHTML = UstUrl;
        document.getElementById('passen').innerHTML = passenUrl;

        // Обновляем содержимое элемента с идентификатором "result"
        document.getElementById('current_date_time_block').innerHTML = timerurl;

        // Получаем строку времени в формате "21:22:22"
        var timeString = timerurl;

        // Разделяем строку времени на компоненты (часы, минуты и секунды)
        var timeComponents = timeString.split(':');

        // Получаем часы и минуты
        var hours = timeComponents[0];
        var minutes = timeComponents[1];

        // Формируем новую строку времени без секунд
        var formattedTime = hours + ':' + minutes;

        // Вставляем отформатированное время в элемент с идентификатором "date_time"
        document.getElementById('date_time').textContent = formattedTime;

        // часы в контроле с датой (потом отредачить чтобы не по id а по классу было)
        // Получаем текущую дату
        const currentDate = new Date();
        // Форматируем дату в строку в нужном формате
        const formattedDay = currentDate.getDate().toString().padStart(2, '0');
        const formattedMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const formattedYear = currentDate.getFullYear().toString();
        const formattedDate = `${formattedDay}.${formattedMonth}.${formattedYear} `;
        // Обновляем содержимое элемента с идентификатором "current_date_time_block"
        document.querySelector('#x').innerHTML = `${formattedDate} ${document.getElementById('current_date_time_block').innerHTML}`;



        var timerElement = document.getElementById("timer");
        var startDate;
        // Создаем объект Date из полученного значения
        startDate = new Date(unixurl);

        // Обновляем таймер сразу после получения даты
        updateTimer();

        // Обновляем таймер каждую секунду после получения даты
        setInterval(updateTimer, 1000);
        // Функция для обновления секундомера
        function updateTimer() {
            // Вычисляем разницу между текущей датой и начальной датой
            const b = new Date(Date.now())
            const date = new Date(Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()))
            const result = date.toISOString().split('T')[0]
            const dfgdgfdf = document.getElementById("timeBus").value ? new Date(`${result}T${document.getElementById("timeBus").value}`) : ''
            
            var diff = new Date() - (dfgdgfdf || startDate);
            
            // Преобразуем разницу в формат "чч:мм:сс"
            var hours = Math.floor(diff / 3600000);
            var minutes = Math.floor((diff - hours * 3600000) / 60000);
            var seconds = Math.floor((diff - hours * 3600000 - minutes * 60000) / 1000);
            var formattedTime =
                minutes.toString().padStart(2, '0') + ':' +
                seconds.toString().padStart(2, '0');

            // Отображаем секундомер на странице
            timerElement.innerText = formattedTime;
        }

        
