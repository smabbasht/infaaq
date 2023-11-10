from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event
from rest_framework import status


@api_view(['POST'])
def register_attendee(request, event_id):
    try:
        event = Event.objects.get(pk=event_id)
        event.n_attendees += 1
        event.save()
        return Response({'status': 'success', 'n_attendees': event.n_attendees})
    except Event.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
