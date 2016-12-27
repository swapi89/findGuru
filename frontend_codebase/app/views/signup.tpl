<div class="container" id="signup-view">

  <div class="col-sm-6 col-sm-offset-3">

      <h1>Signup</h1>

      <!-- show any messages that come back with authentication -->
      <div  *ngIf="messageLength > 0 " class="alert alert-danger">{{messageText}}</div>

      <!-- SIGNUP FORM -->
      <form (ngSubmit)="onSubmit()">
          <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" placeholder="Enter Your Name" name="name" [(ngModel)] = "userName">
          </div>
          <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Enter Your Email" name="email" [(ngModel)] = "userEmail">
          </div>

          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Enter Your Password " name="password" [(ngModel)] = "userPassword" >
          </div>
          <div class="form-group">
              <label>Phone</label>
              <input type="number" class="form-control" name="phone" placeholder="Enter Your Phone Number" name="phoneNo" [(ngModel)] = "userPhone">
          </div>
          <button type="submit" class="btn btn-warning btn-lg">Signup</button>
      </form>

      <hr>

      <p>Already have an account? <a routerLink="/login">Login</a></p>
      <!-- <p>Or go <a href="/">home</a>.</p> -->

  </div>


</div>
