import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Trash, Heart, Languages } from 'lucide-react';
export default function IntakeCard() {
  return (
    <div className="space-y-12">
      <Card className=" w-full max-w-sm overflow-hidden border-none transition-all duration-500 ease-out shadow-[0_40px_80px_-15px_rgba(0,0,0,0.25),0_20px_40px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.30),0_20px_30px_rgba(0,0,0,0.18)]">
        {/* Top 3rd: Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
            alt="Legal scale"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <CardTitle className="text-white">John Doe</CardTitle>
            <p className="text-xs text-slate-200">
              954-435-9475 • jhon.doe@gmail.com
            </p>
          </div>
        </div>

        <CardHeader className="space-y-1 pt-6">
          <CardDescription>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              FACTUAL SUMMARY
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4">
          <p>
            A doctor claimed that damaging rumors about him were being spread.
            He tried to prove this by testifying about what another doctor told
            him. According to his testimony, that other doctor said that a third
            person had just made serious accusations about the doctor’s
            competence and patient outcomes. The problem was that no one who
            actually heard the original remarks testified, and the doctor relied
            on repeating what he had been told secondhand. The court had to
            decide whether this repeated statement could be used as evidence,
            even though it was said outside the courtroom.
          </p>
        </CardContent>
        <Separator />
        <div className="mt-4">
          <CardFooter className="flex justify-end gap-2 py-3">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Languages size={14} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart size={14} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive"
            >
              <Trash size={14} />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
