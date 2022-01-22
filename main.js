Array_name=[]
function submit() {
var display_array=[]
for (let i = 1; i <=4; i++) {
var name_of_students=document.getElementById("name_of_the_student_"+i).value
Array_name.push(name_of_students)
}
console.log(Array_name)
var length=Array_name.length
for (let k = 0; k < length; k++) {
display_array.push("<h4>Name-"+Array_name[k]+"</h4>")
}
console.log(display_array)
document.getElementById("display_name_with_commas").innerHTML=display_array
var remove_commas=display_array.join("<hr>")
document.getElementById("display_name_without_commas").innerHTML=remove_commas

document.getElementById("submit_button").style.display="none"
document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
var sort= Array_name.sort()
var display_array=[]
var length=Array_name.length
for (let k = 0; k < length; k++) {
display_array.push("<h4>Name-"+Array_name[k]+"</h4>")
}
console.log(display_array)
document.getElementById("display_name_with_commas").innerHTML=display_array
var remove_commas=display_array.join("<hr>")
document.getElementById("display_name_without_commas").innerHTML=remove_commas

}
