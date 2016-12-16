<div class="container" id="edit-view">

    <div class="page-header text-center">
        <h1><span class="fa fa-anchor"></span> Profile Page</h1>
        <a href="/logout" class="btn btn-default btn-sm">Logout</a>
    </div>

    <div class="row">

        <!-- LOCAL INFORMATION -->
        <div class="col-sm-6">
            <div class="well">
                <h3><span class="fa fa-user"></span> User Details</h3>
                <h4>Please update your details to get more visibility</h4>
                <!-- <form action="/edit" method="post">
                    <p>
                       <% if(user.local.name){ %>
                        <strong>Name</strong>: <input name="name" value="<%= user.local.name %>" type="text" /><br>
                        <% } %>
                        <% if(user.local.phone){ %>
                        <strong>Phone</strong>: <%= user.local.phone %><br>
                        <% } %>
                        <% if(user.local.subjects){ %>
                        <strong>Subjects</strong>: <%= user.local.subjects %><br>
                        <% } %>
                        <% if(user.local.email){ %>
                        <input type="hidden" value=<%= user.local.email %> name="email"/>
                        <% } %>
                        <button type="submit" class="btn btn-warning btn-lg">Save</button>
                    </p>
                </form> -->
            </div>
        </div>

    </div>

</div>
