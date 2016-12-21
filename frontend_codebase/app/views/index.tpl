<div class="container" id="index-view">

  <div class="jumbotron text-center">
      <h1><span class="fa fa-lock"></span> Node Authentication</h1>

      <p>Login or Register with:</p>

      <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
      <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
  </div>
  <div>
      <div class="row">
        <p *ngFor="let user of users;">
          <span class="name">{{user.name}}</span>
          <span class="email">{{user.email}}</span>
          <span class="mobile">{{user.mobile}}</span>
          <span class="subject">{{user.subject}}</span>
        </p>
          <!-- LOCAL INFORMATION -->

          <!-- <% for(var i=0; i < users.length; i++) { %>
              <div class="col-sm-6">
                  <div class="well">

                          <p>
                              <% if(users[i].local.name){ %>
                              <strong>Name</strong>: <%= users[i].local.name %>
                              <% } %>
                              <br>
                              <% if(users[i].local.email){ %>
                              <strong>Email</strong>: <%= users[i].local.email %>
                              <% } %>
                              <br>
                              <% if(users[i].local.phone){ %>
                              <strong>Phone</strong>: <%= users[i].local.phone %>
                              <% } %>
                              <br>
                              <% if(users[i].local.subjects){ %>
                              <strong>Subjects</strong>: <%= users[i].local.subjects %>
                              <% } %>
                          </p>

                  </div>
              </div>
          <% } %> -->
      </div>
  </div>

</div>
