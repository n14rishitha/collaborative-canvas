class Network {
    constructor() {
        this.socket = io();
    }

    // Client -> Server

    // It Sends a single drawing point
    emitStroke(stroke) {
        this.socket.emit('DRAW_END', stroke);
    }

    // Server -> Client

    // It Listens for broadcasts from other users
    onUpdateCanvas(callback) {
        this.socket.on('UPDATE_CANVAS', (stroke) => {
            callback(stroke);
        });
    }

    onSetState(callback) {
        this.socket.on('SET_STATE', (history) => {
            callback(history);
        });
    }
    emitUndo() {
    this.socket.emit('UNDO_REQUEST');
}

    emitRedo() {
    this.socket.emit('REDO_REQUEST');
}
}