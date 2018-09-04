export class NoteService{
    // copy notes data from home page
    notes = [
    {
    id: '1',
    date: '2016-01-01', //yyyy-mm-dd
    title: 'Ionic 2',
    content: 'Learn the basics of Ionic 2.'
    },
    {
    id: '2',
    date: '2016-02-01',
    title: 'Firebase',
    content: 'A great backend for Ionic applications'
    },
    {
    id: '3',
    date: '2016-03-01',
    title: 'Angular',
    content: 'A good grasp of it is crucial to developing great Ionic 2 apps.'
    }
    ];

    removeNote(note){
        let index = this.notes.indexOf(note);
        if(index > -1){
            this.notes.splice(index,1);
        }
    }

    addNote(note){
        this.notes.push(note);
    }
        
        
}
    