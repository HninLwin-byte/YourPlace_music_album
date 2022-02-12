
function searchSite(){
    var inputted=document.getElementById("searchinput").value;
    var searchForm=document.getElementById("searchForm");
  searchForm.action="http://www.youtube.com/"+inputted;
  searchForm.submit();
}