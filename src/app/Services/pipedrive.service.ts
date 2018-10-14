import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PipedriveService {

  constructor() { }
  changePipeline(id:number){
    this.findPipedriveById(id);
 }

   pipe:Pipedrive;
   taskboard:Pipedrive[] = [{
        id: 'one',
        pipedrive: [{
          id: 'i7hsbhgy',
          title: 'To Dos',
          class: 'todos',   
          tasks: [{
            id:'snsjhdshdj',
            title: 'Launch new template',
            description: 'Integer posuere erat a ante venenatis dapibus posuere.'
          }, {
            id: 'jjfdjfjdjuuukkd',
            title: 'Book a Ticket',
            description: 'Blandit tempus porttitor aasfs.'
          }, {
            id:'kdski55',
            title: 'Task review',
            description: 'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            class: 'task-status-info'
          }]
        }, {
          id:"ndhds4454",
          title: 'inprogress',
          class: 'inprogress',  
          tasks: [{
            title: 'Website Design',
            description: 'Integer posuere erat a ante venenatis dapibus posuere.'
          }, {
            title: 'Angular 5 material',
            description: 'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat aassg.',
            class: 'task-status-danger'
          }]
        }, {
          title: 'Completed',
          class: 'completed',   
          tasks: [{
            title: 'Design work',
            description: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
          }, {
            title: 'Meeting with team',
            description: 'Dapibus ac facilisis in, egestas eget quam.',
            class: 'task-status-success'
          }]
        }, {
          title: 'On Stay',
          class: 'onhold',   
          tasks: [{
            title: 'Ugrate to bootsrap 4 beta',
            description: 'Its panding in all template to update'
          }]
          }]
     },{
      id: 'two',
      pipedrive: [{
        title: 'Two Test',
        class: 'todos',   
        tasks: [{
          title: 'Launch new template',
          description: 'Integer posuere erat a ante venenatis dapibus posuere.'
        }, {
          title: 'Book a Ticket',
          description: 'Blandit tempus porttitor aasfs.'
        }, {
          title: 'Task review',
          description: 'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
          class: 'task-status-info'
        }]
      }, {
        title: 'Two In Progress',
        class: 'inprogress',  
        tasks: [{
          title: 'Error --prod',
          description: 'Lorem Ipsum, dapibus ac facilisis.'
        }]
      }, {
        title: 'Completed',
        class: 'completed',   
        tasks: [{
          title: 'Design work',
          description: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
        }, {
          title: 'Meeting with team',
          description: 'Dapibus ac facilisis in, egestas eget quam.',
          class: 'task-status-success'
        }]
      }, {
        title: 'Two On Hold',
        class: 'onhold',   
        tasks: [{
          title: 'Ugrate to bootsrap 4 beta',
          description: 'Its panding in all template to update'
        }, {
          title: 'Required more plugins',
          description: 'Client require more plugins to add.'
        }]
        }]
   },
     {
      id: 'Three',
      pipedrive: [{
        title: 'To Check',
        class: 'todos',   
        tasks: [{
          title: 'Launch new template',
          description: 'Integer posuere erat a ante venenatis dapibus posuere.'
        }, {
          title: 'Book a Ticket',
          description: 'Blandit tempus porttitor aasfs.'
        }]
      }, {
        title: 'In Progress',
        class: 'inprogress',  
        tasks: [{
          title: 'Website Design',
          description: 'Integer posuere erat a ante venenatis dapibus posuere.'
        }, {
          title: 'Angular 5 material',
          description: 'Lorem Ipsum, dapibus ac facilisis in, egestas eget quam. Integer posuere erat aassg.',
          class: 'task-status-danger'
        }, {
          title: 'Horizontal Layoutbug',
          description: 'Lorem Ipsum, dapibus ac facilisis in',
          class: 'task-status-info'
        }]
      }, {
        title: 'Completed',
        class: 'completed',   
        tasks: [{
          title: 'Design work',
          description: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
        }, {
          title: 'Admin wrap converted',
          description: 'We have finished working.'
        }, {
          title: 'Learning Angular 5',
          description: 'Task is now completed to learn angular5',
          class: 'task-status-success'
        }]
      },{
        title: 'Nothing',
        class: 'Nothing',   
        tasks: [{
          title: 'Design work',
          description: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
        }, {
          title: 'Admin wrap converted',
          description: 'We have finished working.'
        }, {
          title: 'Learning Angular 5',
          description: 'Task is now completed to learn angular5',
          class: 'task-status-success'
        }]
      }, {
        title: 'Three On Hold',
        class: 'onhold',   
        tasks: [{
          title: 'Ugrate to bootsrap 4 beta',
          description: 'Its panding in all template to update'
        }, {
          title: 'Give review on the product',
          description: 'Commodo luctus, nisi erat porttitor lig.',
          class: 'task-status-danger'
        }]
        }]
   }
   ]
   findPipedriveById(id:number){
   return this.taskboard[id];
}

delete(taskid:string,boardid:string){
  console.log(taskid +"  | "+ boardid);
  this.taskboard[0].pipedrive[taskid].tasks.splice(boardid,1);
  return this.taskboard[0];
  }
  deleteCheck(){
    
    this.taskboard[0].pipedrive[0].tasks.splice(0,1);
    
    }

    addCheck(title:string,desc:string){
      this.taskboard[0].pipedrive[0].tasks.push({
        title: title,
        description: desc
      })
    }

}
interface Tasks {
  id?:string;
  title: string;
  description: string;
  class?: string;
}

interface Taskboard {
  title: string;
  tasks: Tasks[];
  class?: string;  
  id?:string  
}
interface Pipedrive {
  id:string;
  pipedrive:Taskboard[];
}