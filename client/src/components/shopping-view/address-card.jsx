const { Card, CardContent } = require("../ui/card");
const { Label } = require("../ui/label");



function AddressCard({addressInfo}) {
    
    return (
        <Card>
            <CardContent className="grid p-4 gap-4">
                <Label>Address: {addressInfo?.address}</Label>
                <Label>City: {addressInfo?.city}</Label>
                <Label>pincode: {addressInfo?.pincode}</Label>
                <Label>Phone: {addressInfo?.phone}</Label>
                <Label>Notes: {addressInfo?.notes}</Label>
            </CardContent>
        </Card>
    )

}

export default AddressCard;