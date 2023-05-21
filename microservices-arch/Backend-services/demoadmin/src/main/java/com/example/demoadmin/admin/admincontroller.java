package com.example.demoadmin.admin;




import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.io.IOException;
 ;
import java.util.List;

@Path("/admin")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class admincontroller {
    @EJB
     adminservice aService = new adminservice();


    @POST
    @Path("/admin")
    public String admin(admin c)  {
      return  aService.admin(c);
    }

    @POST
    @Path("/addCompany")
    public String addSellCompany(Sellcompany c) throws IOException {
        return aService.addSellCompany(c);

    }
    @GET
    @Path("/getsellcompanies")
    public List<Sellcompany> getallsellcompanies() throws IOException {
        return aService.getallsellcompanies();
    }
    @POST
    @Path("/addship")
    public String addShipCompany(shippingcompany s) throws IOException {


         return aService.addShipCompany(s);
    }

    @GET
    @Path("/getshipcompanies")
    public List getallshipcompanies() throws IOException {
      return aService.getallshipcompanies();
    }
    @POST
    @Path("/addlocation/{name}")
    public String addlocation(@PathParam("name") int name, location l) throws IOException {

               return  aService.addlocation(name,l);


    }

    @GET
    @Path("/getcustomers")
    public List<customer> getcustomers() throws IOException {

        return  aService.getcustomers();
    }
}
