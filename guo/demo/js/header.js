{/* <script type="text/x-template" id="cpnid">
    
</script> */}

const cpn = Vue.extend({
    template:`
    <div style="background: #baf">
        <h1>这是公共组件</h1>
        <h1>公共的头部</h1>
        <p>{{msg}}</p>
        <ul>
        <li v-for="(item,index) in prop"
            :key="index"
        >{{item}}</li>
        </ul>
    </div>
    `,
    data() {
        return{
            msg:4567,
            list:[1,3,5,7,9],
            propsDate:prop
        }
    }
})
