const makeUser = function () {
    return {
        jump: function() { this.state+= "jumping, "; return this},
        speak: function() { this.state+= "speaking, "; return this},
        run: function() { this.state+= "running, "; return this},
        swim: function() { this.state+= "swimming, "; return this},
        sleep: function() { this.state+= "sleeping, "; return this},
        exec: function() { console.log(this.state.substring(0, this.state.length-2)) },
        state: ""
    }
}
const user = makeUser()
// calling this
user.sleep().swim().speak().jump().swim().sleep().run().run().exec()
// should output this
//"sleeping, swimming, speaking, jumping, swimming, sleeping, running, running"