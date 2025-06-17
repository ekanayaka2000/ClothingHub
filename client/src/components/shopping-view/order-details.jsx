import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";



function ShoppingOrderDetailsView() {

    return (
        <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <div className="flex mt-10 items-center justify-between">
                        <p className="font-medium">Order ID</p>
                        <Label>123456</Label>
                    </div>
                    <div className="flex mt-5 items-center justify-between">
                        <p className="font-medium">Order Date</p>
                        <Label>27/06/2025</Label>
                    </div>
                    <div className="flex mt-5 items-center justify-between">
                        <p className="font-medium">Order Status</p>
                        <Label>In Process</Label>
                    </div>
                    <div className="flex mt-5 items-center justify-between">
                        <p className="font-medium">Order Price</p>
                        <Label>Rs.1000</Label>
                    </div>
                </div>
                <Separator />
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Order Details</div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span>Title: </span>
                                <span>Quantity:</span>
                                <span>Price: </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <div className="font-medium">Shipping Info</div>
                        <div className="grid gap-0.5 text-muted-foreground">
                            <span>Pramod Madhuranga</span>
                            <span>Address</span>
                            <span>City</span>
                            <span>postalcode</span>
                            <span>phone</span>
                            <span>notes</span>
                        </div>
                    </div>
                </div>
            </div>
        </DialogContent>
    )

}

export default ShoppingOrderDetailsView;