package com.example.demotrial.customer;

import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/product")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class productcontroller {
    @EJB
    productservice aService = new productservice();
    @POST
    @Path("/addproduct/{id}")
    public String addproduct (@PathParam("id") int id, product c){
        return aService.addproduct(id,c);
    }

    @GET
    @Path("/getsaleproducts/{id}")
    public List<product> getsaleproducts(@PathParam("id") int id)
    {
        return aService.getallsaleproducts(id);
    }
    @GET
    @Path("/getproducts")
    public List<product> getproducts()
    {
        return aService.getallproducts();
    }
    @GET
    @Path("/getsoldoutproducts")
    public List<product> getsoldoutproducts()
    {
        return aService.getallsoldoutproducts();
    }
    @GET
    @Path("/getsoldoutproducts/{id}")
    public List<product> getsoldoutproductsbyid(@PathParam("id")int id)
    {
        return aService.getallsoldoutproductsbyid(id);
    }
    @GET
    @Path("/getproduct/{id}")
    public product getproduct(@PathParam("id") int id)
    {
        return aService.getproductbyid(id);
    }

}
