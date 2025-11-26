import NACPB from '/images/nacpb.jpg'
import CTEC from '/images/ctec.png'

export default function Certs() {
    return (
        <div className="flex justify-center items-center space-x-6 pt-9">
            <img
                src={NACPB}
                alt="NACPB"
                className="h-[200px] w-[200px] object-contain"
            />

            <img
                src={CTEC}
                alt="CTEC"
                className="h-[200px] w-[200px] object-contain"
            />
        </div>
    )
}
