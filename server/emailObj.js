//  [{ a: "{contact ob}", b: "{contact ob}" }]
// create seperate function for adminstartor object if there is one?
module.exports = function (options) {
  return function (req, next) {
    req.emailQue = createEmailQue(req.list, req.body.giftLimit, req.body.showData);
    next()
  }
  function createEmailQue(list, giftLimit, showData) {
    let messageArr = createMessage(list, giftLimit);
    if(showData) {
      messageArr += createMasterListEmail(list, giftLimit)
    }
    return messageArr
  }
  function createMessage(list, giftLimit) {
    return list.map((curPair) => {
      return {
        from: 'sender@server.com', // my email server address
        to: `${curPair.a.email}`,  // The santa's email
        subject: 'SSanta Gift Exchange drawing',
        text: `You drew ${curPair.b.name} for the Gift Exchange. The gift limit is set at${giftLimit}.`,
        html: `<p>You drew ${curPair.b.name} for the Gift Exchange.</p>
        <p>The gift limit is set at ${giftLimit}.</p>`
      };
    })
  }
  function createMasterListEmail(list, giftLimit) {
    // create master list email object
    let admin = getAdminEmail(list); //returns an array of admin emails
    let masterList =  createMasterList(list); // return a master list as an array
  }
  function createMasterList(list) {
     list.map((curPair) => {
      return 
    })    
  }
  function getAdminEmail(list) {
    return list.filter((cur) => {
      cur.a.admin === true;
      return cur.a.email;
    })
  }
}


// ! This is a sample of the req obj received

//   {
//     id: 1,
//     name: '',
//     email: '',
//     admin: false
//   },

