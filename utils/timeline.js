class Timeline_handler {
  constructor() {
    this.start = 0;
    this.end = 100;
    this.current = 0;
    this.listeners = [];

    this.direction = true;
    this.delta = 0; 

    this.lastFrameTime = 0;
    this.performance = (typeof performance !== 'undefined') ? performance : Date;
  }



  bind_to_page(page) {
    this.page = page;
    this.page.addEventListener("wheel", this.handle_scroll.bind(this));
    this.lastFrameTime = this.performance.now();
    requestAnimationFrame(this.update.bind(this));
  }

  handle_scroll(e) {
    this.direction = e.deltaY > 0;
    this.delta = 1; 
  }

  update(timestamp){
    // this.current = Math.max(this.start, Math.min(this.end, this.current));
    // this.listeners.forEach((listener) => {
    //   listener(this.current);
    // });
    // console.log(timestamp);

    const time_delta = (this.performance.now() - this.lastFrameTime) / __SCROLL_SPEED;
  
    if(this.direction){
      this.current += this.delta * time_delta;
    } else {
      this.current -= this.delta * time_delta;
    }

    this.current = Math.max(this.start, Math.min(this.end, this.current));
    this.delta = Math.max(0, this.delta - time_delta);

    this.listeners.forEach((listener) => {
      listener(this.current);
    });

    this.lastFrameTime = this.performance.now();
    requestAnimationFrame(this.update.bind(this));
  }

  add_listener(listener) {
    this.listeners.push(listener);
  }
}

// const _timeline = new Timeline_handler();

// export default _timeline;
