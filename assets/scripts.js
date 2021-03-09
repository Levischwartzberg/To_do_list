function addTask() {
    var task = document.getElementById("task").value;
  
    var date_input = document.getElementById("deadline").value;
  
    //console.log(date_input);
  
    var deadline = new Date(date_input);
  
  //time default on new date is 7 PM. This was tested using console logs to ensure that the deadline variable has a time of 12:00 AM on the given date.
    deadline.setHours(24,0,0)
  
    //console.log(deadline);
  
    var days = 1;
  
  //gets the current date and time and assigns the day, month, and year to seperate variables used to construct a properly formatted date for the minimum date entry
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
          dd='0'+dd
      }
      if(mm<10){
          mm='0'+mm
      }
    var min_date = yyyy+'-'+mm+'-'+dd;
  
    //console.log(min_date);
  
    //sets the minimum date for the popup date entry calendar
    document.getElementById("deadline").setAttribute("min", min_date);
  
    //console.log(today);
  
    //subtracting the deadline date and the current time, gives a value in milliseconds, which is converted to days
    days = Math.ceil((deadline - today)/1000/60/60/24) - 1;
    //console.log(days);
  
    //adds day or days depending on if there is just one day or multiple
    var plural = "day";
    if (days == 1) {
      plural = " day"
    }
    else {
      plural = " days"
    }
  
    //logic executing the insertion of the task alerts
    if (task == "") {
      alert("You must enter in a task.");
    }
    else if (isNaN(days) == true) {
      alert("You must enter in a value for deadline date.");
    }
    else if (days < 1) {
      alert("You must enter a date later than today.");
    }
    else {
      var task_to_insert;
      var task_block;
  
      var btn;
      var btn_block;
  
      task_to_insert = document.createElement( "div" );
      if(days > 6) {
        task_to_insert.innerHTML = `
        <div class = "col-md" id="task">
          <div class="alert alert-info">
            <p>
            <button style="padding-left: 30px" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
            ${task} </p>
            <p> ${days} ${plural} </p>
          </div>
        </div>
        `;}
        else if (days > 2) {
        task_to_insert.innerHTML = `
        <div class = "col-md" id="task">
          <div class="alert alert-warning">
            <p>
            <button style="padding-left: 30px" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
            ${task} </p>
            <p> ${days} ${plural} </p>
          </div>
        </div>
        `;}
        else {
          task_to_insert.innerHTML = `
          <div class = "col-md" id="task">
            <div class="alert alert-danger">
              <p>
              <button style="padding-left: 30px" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
              ${task} </p>
              <p> ${days} ${plural} </p>
            </div>
          </div>
          `;
        }
  
      task_block = document.getElementById( "taskbar" );
      task_block.appendChild( task_to_insert );
      //assigns the the value of days to the order of the divs, properly arranging them by date
      task_to_insert.style.order = days;
  
    }
  }
  
  function setToday() {
    //repeats code for assigning the minimum acceptable date, solely used when for when the page is loaded
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
          dd='0'+dd
      }
      if(mm<10){
          mm='0'+mm
      }
  
    var min_date = yyyy+'-'+mm+'-'+dd;
    console.log(min_date);
    document.getElementById("deadline").setAttribute("min", min_date);
  }