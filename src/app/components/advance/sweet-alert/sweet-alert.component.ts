import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2'
declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent implements OnInit {

  constructor() { }

  // Basic Alert
  basicAlert() {
    Swal.fire('Any fool can use a computer');
  }

  // Alert Title
  withTitle() {
    Swal.fire('The Internet?', 'That thing is still around?', 'question');
  }

  // Alert with Image
  withImage() {
    Swal.fire({ imageUrl: './assets/images/logo-light.png', imageHeight: 65, imageAlt: 'A Universal Logo' })
  }

  // A modal with a title, an error icon, a text, and a footer
  error() {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
    })
  }

  // A warning
  warning() {
    Swal.fire({
      type: 'warning',
      title: 'Warning',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // A warning
  success() {
    Swal.fire({
      type: 'success',
      title: 'Success',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Info
  info() {
    Swal.fire({
      type: 'info',
      title: 'Info',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Danger
  danger() {
    Swal.fire({
      type: 'error',
      title: 'Danger',
      text: 'You clicked the button!',
      showConfirmButton: true,
    });
  }

  // Custom HTML description and buttons with ARIA labels
  customHTML() {
    Swal.fire({
      title: '<i>HTML</i> <u>example</u>',
      type: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//github.com">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  }

  // custom position
  customPosition() {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
  }

  // Custom animation
  customAnimation() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      animation: false,
      customClass: 'animated tada'
    });
  }

  // A Custom animation
  customAlert() {
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      background: '#fff url(./assets/images/coming-soon-bg.jpg)',
      backdrop: `
            rgba(20, 72, 72, 0.48)
            center left
            no-repeat
          `
    });
  }

  // A warning message, with a function attached to the "Confirm"-button...
  withConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  }

  // A warning message, with a function attached to the "Confirm"-button and by passing a parameter, you can execute something else for "Cancel".
  withCancelled() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });
  }

  // A message with auto close timer
  autoClose() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 5 seconds.',
      timer: 5000,
      onOpen: () => {
        Swal.showLoading()
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.timer
      ) {
      }
    });
  }

  // A Ajax request example
  withAjax() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => response.json())
          .catch(error => {
            Swal.showValidationError(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    });
  }

  // Chaining modals (queue) example
  stepsAlert() {
    Swal.fire({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      cancelButtonColor: '#FF586B',
      animation: false
    });

    var steps = [
      {
        title: 'Step 1',
        text: 'Chaining modals is easy with Step 1'
      },
      {
        title: 'Step 2',
        text: 'Chaining modals is easy with Step 2'
      },
      {
        title: 'Step 3',
        text: 'Chaining modals is easy with Step 3'
      },
    ];

    Swal.queue(steps).then(function () {
      Swal.fire({
        title: 'All done!',
        text: 'Great job :)',
        confirmButtonText: 'Lovely!',
        showCancelButton: false
      });
    }).then(function () {
      Swal.fire();
    }).catch(Swal.noop);
  }

  // Dynamic queue example
  dynamicQueue() {
    const ipAPI = 'https://api.ipify.org?format=json'
    Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received ' +
        'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(ipAPI)
          .then(response => response.json())
          .then(data => Swal.insertQueueStep(data.ip))
          .catch(() => {
            Swal.insertQueueStep({
              type: 'error',
              title: 'Unable to get your public IP'
            })
          })
      }
    }]);
  }

  ngOnInit() {  }

}
