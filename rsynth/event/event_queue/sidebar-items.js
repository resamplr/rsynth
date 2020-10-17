initSidebarItems({"enum":[["EventCollisionHandling","Determines what should happen when two events are queued with the same timing."]],"struct":[["AlwaysIgnoreNew","Always ignore the newly queued event in case of collision (there's already an event with that timestamp)."],["AlwaysInsertNewAfterOld","Always queue the new newly queued event after the previously queued in case of collision (same timestamp)."],["AlwaysInsertNewBeforeOld","Always queue the new newly queued event before the previously queued in case of collision (same timestamp)."],["AlwaysRemoveOld","Always remove the previously queued event in case of collision (there's already an event with that timestamp)."],["EventQueue","A queue for timed events."]],"trait":[["HandleEventCollision","Trait that describes how \"event collision\" (queing two events with the same timestamp) should happen."]]});