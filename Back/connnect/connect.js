const mongoose=require('mongoose');
 
mongoose.connect('mongodb+srv://Ashish:Ashish0562@prt.q53nr6d.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('connect success');
})