select *  from friends;

select 
fr.id friendship_id,
fr.created created,
fr.updated updated,
fr.user_a user_a,
fr.user_b user_b,
fr.user_a_follow_user_b user_a_follow_user_b,
fr.user_b_follow_user_a user_b_follow_user_a

from friends as fr;


SELECT 
    fr.id friendship_id,
    fr.created created,
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    fr.user_a_follow_user_b user_a_follow_user_b,
    fr.user_b_follow_user_a user_b_follow_user_a,
    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = "2gbkpq07uqvgdvv" AND (user_b = fr.user_a or user_b = fr.user_b)) and user_b_follow_user_a = "yes") 
    or
    ((user_b = "2gbkpq07uqvgdvv" AND (user_a = fr.user_a or user_a = fr.user_b)) and user_a_follow_user_b = "yes" )
    ),'no') as following_me,

    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = "2gbkpq07uqvgdvv" AND (user_b = fr.user_a or user_b = fr.user_b)) and user_a_follow_user_b = "yes") 
    or
    ((user_b = "2gbkpq07uqvgdvv" AND (user_a = fr.user_a or user_a = fr.user_b)) and user_b_follow_user_a = "yes" )
    ),'no') as followed_by_me


FROM friends as fr;




SELECT 
    fr.id friendship_id,
    fr.created created,
    
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    fr.user_a_follow_user_b user_a_follow_user_b,
    fr.user_b_follow_user_a user_b_follow_user_a,
    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = {:logged_in
   } AND (user_b = fr.user_a or user_b = fr.user_b)) and user_b_follow_user_a = "yes") 
    or
    ((user_b = {:logged_in
    } AND (user_a = fr.user_a or user_a = fr.user_b)) and user_a_follow_user_b = "yes" )
    ),'no') as following_me,

    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = {:logged_in
   } AND (user_b = fr.user_a or user_b = fr.user_b)) and user_a_follow_user_b = "yes") 
    or
    ((user_b = {:logged_in
    } AND (user_a = fr.user_a or user_a = fr.user_b)) and user_b_follow_user_a = "yes" )
    ),'no') as followed_by_me


FROM friends as fr


SELECT 
    fr.id friendship_id,
    fr.created created,
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    fr.user_a_follow_user_b user_a_follow_user_b,
    fr.user_b_follow_user_a user_b_follow_user_a,
    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = {:logged_in
   } AND (user_b = fr.user_a or user_b = fr.user_b)) and user_b_follow_user_a = "yes") 
    or
    ((user_b = {:logged_in
    } AND (user_a = fr.user_a or user_a = fr.user_b)) and user_a_follow_user_b = "yes" )
    ),'no') as following_me,

    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = {:logged_in
   } AND (user_b = fr.user_a or user_b = fr.user_b)) and user_a_follow_user_b = "yes") 
    or
    ((user_b = {:logged_in
    } AND (user_a = fr.user_a or user_a = fr.user_b)) and user_b_follow_user_a = "yes" )
    ),'no') as followed_by_me


FROM friends as fr
WHERE (
    (fr.created < {:created} OR (fr.created = {:created} AND fr.id < {:id})) 
    )
ORDER BY fr.created DESC, pp.id DESC
LIMIT {:limit};



SELECT
    fr.id friendship_id,
    fr.created created,
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    fr.user_a_follow_user_b user_a_follow_user_b,
    fr.user_b_follow_user_a user_b_follow_user_a,
    IFNULL(
    (SELECT id FROM friends
    WHERE
   ((user_a = '2gbkpq07uqvgdvv'
                AND
        (user_b = fr.user_a or user_b = fr.user_b)) and user_b_follow_user_a = "yes")
    or
    ((user_b = '2gbkpq07uqvgdvv'
                AND
        (user_a = fr.user_a or user_a = fr.user_b)) and user_a_follow_user_b = "yes" )
    ),'no') as following_me,

    IFNULL(
    (SELECT id FROM friends
    WHERE
   ((user_a = '2gbkpq07uqvgdvv'
                AND
        (user_b = fr.user_a or user_b = fr.user_b)) and user_a_follow_user_b = "yes")
    or
    ((user_b = '2gbkpq07uqvgdvv'
                AND
         (user_a = fr.user_a or user_a = fr.user_b)) and user_b_follow_user_a = "yes" )
    ),'no') as followed_by_me


FROM friends as fr
WHERE (
    (fr.created < '' OR (fr.created = '' AND fr.id < ''))
    )
ORDER BY fr.created DESC, fr.id DESC
LIMIT '5'


