<div class="container" id="login-view">

  <div class="col-sm-6 col-sm-offset-3">

      <h1>Login</h1>

      <!-- show any messages that come back with authentication -->
          <div  *ngIf="messageLength > 0 " class="alert" [ngClass] = "{ 'alert-success' : isSelected , 'alert-danger' : !isSelected}">{{messageText}}</div>
      <!-- LOGIN FORM -->
      <form>
          <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="EMAIL" name="email" [(ngModel)] = "userEmail">
          </div>
          <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="PASSWORD" name="password" [(ngModel)] = "userPassword">
          </div>
          <button type="submit" class="btn btn-warning btn-lg" (click) = "onSubmit()">Login</button>
      </form>

      <p (click) = "goToSignup()">Need an account? <a routerLink="/signUp" >Signup</a></p>
      <!-- <p>Or go <a href="#">home</a>.</p> -->

  </div>


</div>
