use test_game_a_week_database

db.dropDatabase();

db.test_data_home_page.insert({
  header: {
    text: "Home Page Header",
    order: 1
  },
  paragraphs: [
    {text: "This is the first paragraph", 
    order: 2},
    {text: "This is the second paragraph",
    order: 4}
  ],
  videos: {
    url: "https://www.youtube.com/embed/ESxdCohXbWE",
    order: 5
  },
  images: [
    {url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Example.svg",
    order: 3}
  ]
})