import express from 'express';
import {
    accessFriendRequest,
    sendFriendRequest,
    declineFriendRequest,
    getAllFriends,
    getFriendRequests
} from "../controllers/friendController.js"

const router = express.Router();

router.post('/requests', sendFriendRequest);

router.post('/requests/:requestId/accept', accessFriendRequest);
router.post('/requests/:requestId/decline', declineFriendRequest);

router.get("/", getAllFriends);
router.get("/requests", getFriendRequests);

export default router;