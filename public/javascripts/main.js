var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

$(document).ready(function() {
  //Tat iy
  var availableTags = [
    {value: 1, label: 'Manhattan', class: "Borough"},
    {value: 10, label: 'Uptown Manhattan'},
    {value: 100, label: 'East Harlem'},
    {value: 101, label: 'Fort George'},
    {value: 1000, label: 'Hudson Heights'},
    {value: 102, label: 'Hamilton Heights'},
    {value: 103, label: 'Harlem'},
    {value: 1001, label: 'Sugar Hill'},
    {value: 104, label: 'Inwood'},
    {value: 105, label: 'Upper West Side'},
    {value: 1002, label: 'Lincoln Square'},
    {value: 106, label: 'Upper East Side'},
    {value: 1003, label: 'Yorkville'},
    {value: 1004, label: 'Lenox Hill'},
    {value: 107, label: 'Morningside Heights'},
    {value: 108, label: 'Washington Heights'},
    {value: 11, label: 'Midtown Manhattan'},
    {value: 109, label: 'Theatre District'},
    {value: 110, label: 'Garment District'},
    {value: 111, label: 'Chelsea'},
    {value: 112, label: 'Flat Iron District'},
    {value: 113, label: 'Gramercy'},
    {value: 114, label: 'Hell\'s Kitchen'},
    {value: 114, label: 'Hells Kitchen'},
    {value: 115, label: 'Kips Bay'},
    {value: 116, label: 'Murray Hill'},
    {value: 117, label: 'NoMad'},
    {value: 118, label: 'Peter Cooper Village'},
    {value: 119, label: 'Stuyvesant Town'},
    {value: 120, label: 'Sutton Place'},
    {value: 121, label: 'Tudor City'},
    {value: 122, label: 'Turtle Bay'},
    {value: 12, label: 'Downtown Manhattan'},
    {value: 123, label: 'Battery Park City'},
    {value: 124, label: 'Bowery'},
    {value: 125, label: 'China Town'},
    {value: 126, label: 'Civic Center'},
    {value: 127, label: 'East Village'},
    {value: 1005, label: 'Alphabet City'},
    {value: 128, label: 'Financial District'},
    {value: 129, label: 'Greenwich Valley'},
    {value: 130, label: 'Hudson Square'},
    {value: 131, label: 'Little Italy'},
    {value: 132, label: 'Lower East Side'},
    {value: 133, label: 'Meat Packing District'},
    {value: 134, label: 'NoHo'},
    {value: 135, label: 'Nolita'},
    {value: 136, label: 'SoHo'},
    {value: 137, label: 'Tribeca'},
    {value: 138, label: 'Two Bridges'},
    {value: 139, label: 'West Village'},
    {value: 2, label: 'Brooklyn'},
    {value: 140, label: 'Greenpoint'},
    {value: 141, label: 'Williamsburg'},
    {value: 1006, label: 'East Williamsburg'},
    {value: 142, label: 'Bushwick'},
    {value: 143, label: 'Boerum Hill'},
    {value: 144, label: 'Brooklyn Heights'},
    {value: 145, label: 'Carroll Gardens'},
    {value: 146, label: 'Clinton Hill'},
    {value: 147, label: 'Cobble Hill'},
    {value: 148, label: 'Cypress Hills'},
    {value: 149, label: 'Downtown Brooklyn'},
    {value: 150, label: 'Dumbo'},
    {value: 151, label: 'Fort Greene'},
    {value: 152, label: 'Gowanus'},
    {value: 153, label: 'Navy Yard'},
    {value: 154, label: 'Park Slope'},
    {value: 155, label: 'Prospect Heights'},
    {value: 156, label: 'Red Hook'},
    {value: 157, label: 'South Slope'},
    {value: 158, label: 'Bath Beach'},
    {value: 159, label: 'Bay Ridge'},
    {value: 160, label: 'Bedford-Stuyvesant'},
    {value: 161, label: 'Bensonhurst'},
    {value: 162, label: 'Bergen Beach'},
    {value: 163, label: 'Borough Park'},
    {value: 164, label: 'Brighton Beach'},
    {value: 165, label: 'Brownsville'},
    {value: 166, label: 'Canarsie'},
    {value: 167, label: 'Coney Island'},
    {value: 168, label: 'Crown Heights'},
    {value: 169, label: 'Dyker Heights'},
    {value: 170, label: 'East Flatbush'},
    {value: 171, label: 'East New York'},
    {value: 172, label: 'Flatbush'},
    {value: 173, label: 'Flatlands'},
    {value: 174, label: 'Fort Hamilton'},
    {value: 175, label: 'Gerritsen Beach'},
    {value: 176, label: 'Gravesend'},
    {value: 177, label: 'Kensington'},
    {value: 178, label: 'Manhattan Beach'},
    {value: 179, label: 'Marine Park'},
    {value: 180, label: 'Midwood'},
    {value: 181, label: 'Mill Basin'},
    {value: 182, label: 'Prospect Lefferts Garden'},
    {value: 183, label: 'Prospect Park South'},
    {value: 184, label: 'Sea Gate'},
    {value: 185, label: 'Sheepshead Bay'},
    {value: 186, label: 'Sunset Park'},
    {value: 187, label: 'Windsor Terrace'},
    {value: 3, label: 'Queens'},
    {value: 188, label: 'Ditmars Steinway'},
    {value: 189, label: 'Astoria'},
    {value: 190, label: 'Long Island City'},
    {value: 191, label: 'Hunter\'s Point'},
    {value: 192, label: 'Sunnyside'},
    {value: 193, label: 'Woodside'},
    {value: 194, label: 'Maspeth'},
    {value: 195, label: 'Jackson Heights'},
    {value: 196, label: 'Elmhurst'},
    {value: 197, label: 'East Elmhurst'},
    {value: 198, label: 'North Corona'},
    {value: 199, label: 'Corona'},
    {value: 200, label: 'Ridgewood'},
    {value: 201, label: 'Rego Park'},
    {value: 202, label: 'Middle Village'},
    {value: 203, label: 'Glendale'},
    {value: 204, label: 'Forest Hills'},
    {value: 205, label: 'Forest Park'},
    {value: 206, label: 'Flushing'},
    {value: 207, label: 'Kew Gardens'},
    {value: 208, label: 'Woodhaven'},
    {value: 209, label: 'Richmond Hill'},
    {value: 210, label: 'Ozone Park'},
    {value: 211, label: 'Queensboro Hill'},
    {value: 212, label: 'Murray Hill'},
    {value: 213, label: 'Bowne Park'},
    {value: 214, label: 'Whitestone'},
    {value: 215, label: 'Briarwood'}
    ];
    
  //The text input
  var input = $("input#locations");
    
  //The tagit list
  var instance = $("<ul class=\"tags\"></ul>");
    
  //Store the current tags
  //Note: the tags here can be split by any of the trigger keys
  //      as tagit will split on the trigger keys anything passed  
  var currentTags = input.val();
    
  //Hide the input and append tagit to the dom
  input.hide().after(instance);
    
  //Initialize tagit
  instance.tagit({
    tagSource:availableTags,
    showAutocompleteOnFocus : true,
    placeholderText: "ex. East Village",
    autocomplete: {delay: 0, minLength: 0, autoFocus: true},
    tagsChanged:function () {
                                        
      //Get the tags            
      var tags = instance.tagit('tags');
      var tagString = [];
                            
      //Pull out only value
      for (var i in tags){
        tagString.push(tags[i].value);
      }
        
      //Put the tags into the input, joint by a ','
      input.val(tagString.join(','));
      //alert(input.val())
    }
  });

  //Add pre-loaded tags to tagit
  //instance.tagit('add', currentTags);

    $("#searchbtn, #searchbtn2").click(function() {
        locations = input.val()
        minprice = $("input#minprice").val().length === 0 ? 0 : $("input#minprice").val();
        
        var maxprice = 999999
        if ($("input#maxprice").val() != 0 ) { 
            maxprice = $("input#maxprice").val()
        }

        var availableby = ''

        if ($("input#datepicker").val().length === 0) {
            availableby = mm+'-'+dd+'-'+yyyy
        } 
        
        else {
            availableby = $("input#datepicker").val().replace("/", "-").replace("/", "-")
        }

        var bed = document.getElementById("bedrooms");
        var bedrooms = bed.options[bed.selectedIndex].value

        var bath = document.getElementById("bathrooms");
        var bathrooms = bath.options[bath.selectedIndex].value

        if ($("#bedmore").is(':checked') == true) {
            bedmore =true
        } 
        else {
            bedmore = false
        };

        if ($("#bathmore").is(':checked') == true) {
            bathmore =true
        } 
        else {
            bathmore = false
        };

        if ($("#By_Owner").is(':checked') == true) {
            By_Owner =true
        } 
        else {
            By_Owner = false
        };

        if ($("#Dishwasher").is(':checked') == true) {
            Dishwasher =true
        } 
        else {
            Dishwasher = false
        };

        if ($("#Laundry").is(':checked') == true) {
            Laundry =true
        } 
        else {
            Laundry = false
        };

        if ($("#Dogs").is(':checked') == true) {
            Dogs =true
        } 
        else {
            Dogs = false
        };

        if ($("#Cats").is(':checked') == true) {
            Cats =true
        } 
        else {
            Cats = false
        };

        if ($("#Other_Pets").is(':checked') == true) {
            Other_Pets =true
        } 
        else {
            Other_Pets = false
        };

        if ($("#Outdoor").is(':checked') == true) {
            Outdoor =true
        } 
        else {
            Outdoor = false
        };

        if ($("#Fireplace").is(':checked') == true) {
            Fireplace =true
        } 
        else {
            Fireplace = false
        };

        if ($("#Furnished").is(':checked') == true) {
            Furnished =true
        } 
        else {
            Furnished = false
        };

        if ($("#Gym").is(':checked') == true) {
            Gym =true
        } 
        else {
            Gym = false
        };

        if ($("#Pool").is(':checked') == true) {
            Pool =true
        } 
        else {
            Pool = false
        };

        if ($("#Storage").is(':checked') == true) {
            Storage =true
        } 
        else {
            Storage = false
        };

        if ($("#Parking").is(':checked') == true) {
            Parking =true
        } 
        else {
            Parking = false
        };
        
        window.location.href = "/search/results?locations=" + locations + "&minprice=" + minprice + "&maxprice=" + maxprice + "&availableby=" + availableby 
        + "&bedrooms=" + bedrooms + "&bathrooms=" + bathrooms + "&bedmore=" + bedmore + "&bathmore=" + bathmore + "&By_Owner=" + By_Owner + 
        "&Dishwasher=" + Dishwasher + "&Laundry=" + Laundry + "&Dogs=" + Dogs + "&Cats=" + Cats + "&Other_Pets=" + Other_Pets + "&Outdoor=" + Outdoor + 
        "&Fireplace=" + Fireplace + "&Furnished=" + Furnished + "&Gym=" + Gym + "&Pool=" + Pool + "&Storage=" + Storage + "&Parking=" + Parking
    });
});