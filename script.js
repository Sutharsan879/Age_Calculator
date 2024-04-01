let dob=document.getElementById("birthDate");
let currentDate=document.getElementById("currentDate");
let output=document.getElementById("output");

document.getElementById("calculatebtn").addEventListener("click",()=>{
    if(dob.value==""||currentDate.value=="")
    {
        output.innerHTML="Please select Date";
    }
    else
    {
        calculateAgeDifference(dob.value,currentDate.value);
    }
});

function calculateAgeDifference(start,end)
{
    console.log(start);
    let dobyear=parseInt(start.substring(0,4),10);
    let dobmonth=parseInt(start.substring(5,7),10);
    let dobdate=parseInt(start.substring(8,10),10);
    let curryear=parseInt(end.substring(0,4),10);
    let currmonth=parseInt(end.substring(5,7),10);
    let currdate=parseInt(end.substring(8,10),10);

    let yearAgeDiff = curryear-dobyear;

    let monthAgeDiff;
    if(currmonth>=dobmonth)
    {
        monthAgeDiff=currmonth-dobmonth;
    }
    else
    {
        yearAgeDiff--;
        monthAgeDiff=12+currmonth-dobmonth;
    }

    let dateAgeDiff;
    if(currdate>=dobdate)
    {
        dateAgeDiff=currdate-dobdate;
    }
    else
    {
        monthAgeDiff--;
        noofDaysInDob=daysInMonth(dobmonth,dobyear);
        dateAgeDiff=noofDaysInDob+currdate-dobdate;

        if(monthAgeDiff<0)
        {
            monthAgeDiff=11;
            yearAgeDiff--;
        }
    }
    output.innerHTML = yearAgeDiff  + " Years "+","+" " + monthAgeDiff + " Months "+","+" " + dateAgeDiff + " Days.";
}

function daysInMonth(month,year)
{
    return new Date(year, month, 0).getDate();
}