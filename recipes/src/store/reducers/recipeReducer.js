const initState = {

    recipes:[
    {
        id:1,
        title:'Yum-Yum-Tacos',
        img:'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?cs=srgb&dl=blur-close-up-cuisine-2087748.jpg&fm=jpg',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:2,
        title:'Get-Chubby-Lasagna',
        img:'https://images.pexels.com/photos/116738/pexels-photo-116738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:3,
        title:'Extra-juicy-Steak',
        img:'https://images.pexels.com/photos/1268549/pexels-photo-1268549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },

    {
        id:4,
        title:'Some-Salt-Stuff',
        img:'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:5,
        title:'Winos',
        img:'https://images.pexels.com/photos/1893609/pexels-photo-1893609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },

{
        id:6,
        title:'Tiny-Burrito',
        img:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:7,
        title:'One-Chicken',
        img:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
]

}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_RECIPE_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;