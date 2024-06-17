const app = Vue.createApp({
    data() {
      return {  
        showStartWindow: true,
        showResourcesWindow: false,
        showBook1: false,
        showBook2: false,
        showBook3: false,
        showBook4: false,
        showBook5: false,
        showBook6: false,
        showHoverBook1: false,
        showHoverBook2: false,
        showHoverBook3: false,
        showHoverBook4: false,
        showHoverBook5: false,
        showHoverBook6: false,
        resource1: false,
        resource2: false,
        resource3: false,
        resource4: false,
        resource5: false,
        resource6: false,
      }  
    }, 
        methods: {
          
//           Start 
         
          start() {
            this.showStartWindow = false; 
            this.showHoverBook1 = true;
            this.showHoverBook2 = true;
            this.showHoverBook3 = true;
            this.showHoverBook4 = true;
            this.showHoverBook5 = true;
            this.showHoverBook6 = true;
          },
          
          //           Resetting afte hovering over the books
          mouseNotOverBooks(){
            this.showBook1 = false;
            this.showBook2 = false;
            this.showBook3 = false;
            this.showBook4 = false;
            this.showBook5 = false;
            this.showBook6 = false;
            this.start();
          },
          
//           Close resources windows
          
          closeResourceWindow(){
            this.showResourcesWindow = false;
            this.start();
          },
          
//           Hover over the books
          
          mouseOverBook1(){
             this.showBook1 = true;
             this.showHoverBook1 = false;
             this.showHoverBook2 = true;
             this.showHoverBook3 = true;
             this.showHoverBook4 = true;
             this.showHoverBook5 = true;
             this.showHoverBook6 = true;
            }, 

          mouseOverBook2(){
            this.showBook2 = true;
             this.showHoverBook1 = true;
             this.showHoverBook2 = false;
             this.showHoverBook3 = true;
             this.showHoverBook4 = true;
             this.showHoverBook5 = true;
             this.showHoverBook6 = true;
          }, 

          mouseOverBook3(){
             this.showBook3 = true;
             this.showHoverBook1 = true;
             this.showHoverBook2 = true;
             this.showHoverBook3 = false;
             this.showHoverBook4 = true;
             this.showHoverBook5 = true;
             this.showHoverBook6 = true;
          }, 

          mouseOverBook4(){
             this.showBook4 = true;
             this.showHoverBook1 = true;
             this.showHoverBook2 = true;
             this.showHoverBook3 = true;
             this.showHoverBook4 = false;
             this.showHoverBook5 = true;
             this.showHoverBook6 = true;
          }, 

          mouseOverBook5(){
             this.showBook5 = true;
             this.showHoverBook1 = true;
             this.showHoverBook2 = true;
             this.showHoverBook3 = true;
             this.showHoverBook4 = true;
             this.showHoverBook5 = false;
             this.showHoverBook6 = true;
          }, 

          mouseOverBook6(){
             this.showBook6 = true;
             this.showHoverBook1 = true;
             this.showHoverBook2 = true;
             this.showHoverBook3 = true;
             this.showHoverBook4 = true;
             this.showHoverBook5 = true;
             this.showHoverBook6 = false;
          }, 

//           click the books
        
          chooseResource(x){
             if (x == 1) {this.resource1 = true; this.resource2 = false; this.resource3 = false; this.resource4 = false; this.resource5 = false; this.resource6 = false}
             if (x == 2) {this.resource1 = false; this.resource2 = true; this.resource3 = false; this.resource4 = false; this.resource5 = false; this.resource6 = false}
             if (x == 3) {this.resource1 = false; this.resource2 = false; this.resource3 = true; this.resource4 = false; this.resource5 = false; this.resource6 = false}
             if (x == 4) {this.resource1 = false; this.resource2 = false; this.resource3 = false; this.resource4 = true; this.resource5 = false; this.resource6 = false}
             if (x == 5) {this.resource1 = false; this.resource2 = false; this.resource3 = false; this.resource4 = false; this.resource5 = true; this.resource6 = false}
             if (x == 6) {this.resource1 = false; this.resource2 = false; this.resource3 = false; this.resource4 = false; this.resource5 = false; this.resource6 = true}
          },
          
          clickBook1(){
            this.mouseNotOverBooks();
            this.showHoverBook1 = false;
            this.showHoverBook2 = false;
            this.showHoverBook3 = false;
            this.showHoverBook4 = false;
            this.showHoverBook5 = false;
            this.showHoverBook6 = false;
            this.showResourcesWindow = true;
            this.chooseResource(1);       
          },
          
          clickBook2(){
            this.mouseNotOverBooks();
            this.showHoverBook1 = false;
            this.showHoverBook2 = false;
            this.showHoverBook3 = false;
            this.showHoverBook4 = false;
            this.showHoverBook5 = false;
            this.showHoverBook6 = false;
            this.showResourcesWindow = true;
            this.chooseResource(2);       
          },
          
          clickBook3(){
            this.mouseNotOverBooks();
            this.showHoverBook1 = false;
            this.showHoverBook2 = false;
            this.showHoverBook3 = false;
            this.showHoverBook4 = false;
            this.showHoverBook5 = false;
            this.showHoverBook6 = false;
            this.showResourcesWindow = true;
            this.chooseResource(3);       
          },
          
          clickBook4(){
            this.mouseNotOverBooks();
            this.showHoverBook1 = false;
            this.showHoverBook2 = false;
            this.showHoverBook3 = false;
            this.showHoverBook4 = false;
            this.showHoverBook5 = false;
            this.showHoverBook6 = false;
            this.showResourcesWindow = true;
            this.chooseResource(4);       
          },
          
          clickBook5(){
            this.mouseNotOverBooks();
            this.showHoverBook1 = false;
            this.showHoverBook2 = false;
            this.showHoverBook3 = false;
            this.showHoverBook4 = false;
            this.showHoverBook5 = false;
            this.showHoverBook6 = false;
            this.showResourcesWindow = true;
            this.chooseResource(5);       
          },
          
          clickBook6(){
            this.mouseNotOverBooks();
            this.showHoverBook1 = false;
            this.showHoverBook2 = false;
            this.showHoverBook3 = false;
            this.showHoverBook4 = false;
            this.showHoverBook5 = false;
            this.showHoverBook6 = false;
            this.showResourcesWindow = true;
            this.chooseResource(6);       
          },
          
          
        }
  })

 app.mount('#app')
