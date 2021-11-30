export class BasicClassComponent {
  constructor(htmlPart) {
    this.state = {
      htmlPart,
    };
  }

  closeNavBar(callback) {
    document.getElementById("main").innerHTML = callback
      ? callback(this.state.htmlPart)
      : this.state.htmlPart;
    document.getElementById("navbar-toggler").ariaExpanded = "false";
    document.getElementById("navbar-toggler").classList.add("collapsed");
    document.getElementById("navbarNavDropdown").classList.remove("show");
  }

  render() {
    this.closeNavBar();
  }
}
