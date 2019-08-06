// groupSize: 3,
//   showData: false,
//     peoples: [
//       {
//         id: 1,
//         name: '',
//         email: '',
//         admin: false,
//       },
//       {
//         id: 2,
//         name: '',
//         email: '',
//         admin: false,
//       },
//       {
//         id: 3,
//         name: '',
//         email: '',
//         admin: false,
//       },
//     ]

export default {
  validForm(state){
    const size = this.propGroupSize(state.peoples.length);
    const showData = this.propShowData(state.showData);
    const groupAdmin = this.propGroupAdmin(state.peoples);
    return size && showData && groupAdmin;
  },
  propGroupSize(size){
    const bigEnough = size >= 3;
    return bigEnough;
  },
  propShowData(show){
    return typeof show == 'Boolean';
  },
  propGroupAdmin(peoples){
    let admin = 0;
    for (let i = 0; i < peoples.length; i++) {
      if (peoples[i].admin === true){
        admin += 1;
      };
    }
    return (admin >= 1)? true : false; 
  }
}
